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

# Subscriber ViewSet
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