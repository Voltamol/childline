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

# views.py
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from .models import Subscriber
from .serializers import SubscriberSerializer, LoginSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

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
        user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])

        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

# LineCategory ViewSet
class LineCategoryViewSet(viewsets.ModelViewSet):
    queryset = LineCategory.objects.all()
    serializer_class = LineCategorySerializer

# CategoryItem ViewSet
from rest_framework import viewsets
from .models import CategoryItem
from .serializers import CategoryItemSerializer

from rest_framework import viewsets
from .models import CategoryItem
from .serializers import CategoryItemSerializer

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

#Subscriber ViewSet
class SubscriberViewSet(viewsets.ModelViewSet):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer

# Thread ViewSet
class ThreadViewSet(viewsets.ModelViewSet):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer

# SocialLink ViewSet
class SocialLinkViewSet(viewsets.ModelViewSet):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer