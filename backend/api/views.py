from rest_framework import viewsets
from .models import (
    LineCategory,
    CategoryItem,
    ParagraphSection,
    FurtherInfo,
    BoldPoint,
    Tag,
    Bullet,
    Resource,
    Subscriber,
    Thread,
    SocialLink
)
from .serializers import (
    LineCategorySerializer,
    CategoryItemSerializer,
    ParagraphSectionSerializer,
    FurtherInfoSerializer,
    BoldPointSerializer,
    TagSerializer,
    BulletSerializer,
    ResourceSerializer,
    SubscriberSerializer,
    ThreadSerializer,
    SocialLinkSerializer
)

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from .models import Subscriber
from .serializers import SubscriberSerializer, LoginSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import FileResponse


class SignupView(generics.CreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer
    permission_classes = [AllowAny]

    @method_decorator(csrf_exempt)  # Exempt this view from CSRF verification
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        # Optionally, generate a token or return user details
        return Response({'message': 'Login successful', 'user': user.id}, status=status.HTTP_200_OK)
    
# LineCategory ViewSet
class LineCategoryViewSet(viewsets.ModelViewSet):
    queryset = LineCategory.objects.all()
    serializer_class = LineCategorySerializer

class CategoryItemViewSet(viewsets.ModelViewSet):
    serializer_class = CategoryItemSerializer
    queryset = CategoryItem.objects.all().prefetch_related(
        'paragraphs', 
        'further_info', 
        'bold_points', 
        'tags', 
        'bullets'
    )

    def get_queryset(self):
        name = self.request.query_params.get('line_category_name', None)
        queryset = super().get_queryset()  # Get the base queryset
        # Filtering by service_line name
        
        service_line_name = self.request.query_params.get('service_line_name', None)
        if service_line_name:
            queryset = queryset.filter(service_line__name=service_line_name)

        if name:
            queryset = queryset.filter(name=name)  # Filter by CategoryItem's name
        return queryset


# ParagraphSection ViewSet
class ParagraphSectionViewSet(viewsets.ModelViewSet):
    queryset = ParagraphSection.objects.all()
    serializer_class = ParagraphSectionSerializer

# FurtherInfo ViewSet
class FurtherInfoViewSet(viewsets.ModelViewSet):
    queryset = FurtherInfo.objects.all()
    serializer_class = FurtherInfoSerializer

# BoldPoint ViewSet
class BoldPointViewSet(viewsets.ModelViewSet):
    queryset = BoldPoint.objects.all()
    serializer_class = BoldPointSerializer

# Tag ViewSet
class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

# Bullet ViewSet
class BulletViewSet(viewsets.ModelViewSet):
    queryset = Bullet.objects.all()
    serializer_class = BulletSerializer

# Resource ViewSet
class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

class ResourceDownloadView(APIView):
    def get(self, request, pk):
        try:
            resource = Resource.objects.get(pk=pk)
            file_path = resource.document.path  # Get the file path
            response = FileResponse(open(file_path, 'rb'), as_attachment=True)
            response['Content-Disposition'] = f'attachment; filename="{resource.document.name}"'
            return response
        except Resource.DoesNotExist:
            return Response({"detail": "Resource not found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#Subscriber ViewSet
class SubscriberViewSet(viewsets.ModelViewSet):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer

    @action(detail=False, methods=['get'], url_path='by-email')
    def get_subscriber_by_email(self, request):
        email = request.query_params.get('email', None)
        if email is not None:
            try:
                subscriber = Subscriber.objects.get(email=email)
                serializer = self.get_serializer(subscriber)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Subscriber.DoesNotExist:
                return Response({"detail": "Subscriber not found."}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"detail": "Email parameter is required."}, status=status.HTTP_400_BAD_REQUEST)

# Thread ViewSet
class ThreadViewSet(viewsets.ModelViewSet):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer


# SocialLink ViewSet
class SocialLinkViewSet(viewsets.ModelViewSet):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer