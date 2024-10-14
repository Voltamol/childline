from rest_framework import serializers
from django.contrib.auth import authenticate
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
    SocialLink,
)

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ('username', 'email', 'password', 'authorized_to_edit')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Subscriber(
            username=validated_data['username'],
            email=validated_data['email'],
            authorized_to_edit=validated_data['authorized_to_edit']
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        user = authenticate(username=attrs['username'], password=attrs['password'])
        if not user:
            raise serializers.ValidationError('Invalid credentials')
        attrs['user'] = user
        return attrs

class LineCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = LineCategory
        fields = '__all__'

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
        read_only_fields = ['authorized_to_edit']

class ThreadSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=Subscriber.objects.all())
    class Meta:
        model = Thread
        fields = '__all__'

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = '__all__'