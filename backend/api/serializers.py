from rest_framework import serializers
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

class LineCategorySerializer(serializers.ModelSerializer):

    categories = serializers.SerializerMethodField()

    class Meta:
        model = LineCategory
        fields = '__all__'

    def get_categories(self, obj):
        # Use the CategoryItemSerializer to serialize category_items
        items = obj.get_categories  # Call the property
        return CategoryItemSerializer(items, many=True).data


class ParagraphSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParagraphSection
        fields = '__all__'

class FurtherInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FurtherInfo
        fields = '__all__'

class BoldPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoldPoint
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class BulletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bullet
        fields = '__all__'

class CategoryItemSerializer(serializers.ModelSerializer):
    service_line = LineCategorySerializer(read_only=True)
    paragraphs = ParagraphSectionSerializer(many=True, read_only=True)
    further_info = FurtherInfoSerializer(many=True, read_only=True)
    bold_points = BoldPointSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    bullets = BulletSerializer(many=True, read_only=True)
    class Meta:
        model = CategoryItem
        fields = '__all__'
        
class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = '__all__'

class ThreadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thread
        fields = '__all__'

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = '__all__'