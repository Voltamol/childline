from django.contrib import admin
from .models import (
    LineCategory,
    CategoryItem,
    Bullet,
    Resource,
    Subscriber,
    Thread,
    SocialLink,
    ParagraphSection,
    FurtherInfo,
    BoldPoint,
    Tag
)

class LineCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class CategoryItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'service_line', 'created_at', 'updated_at')
    list_filter = ('service_line',)
    search_fields = ('name', 'description')

class BulletAdmin(admin.ModelAdmin):
    list_display = ('body', 'item', 'created_at', 'updated_at')
    list_filter = ('item',)
    search_fields = ('body',)

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'created_at', 'updated_at')
    search_fields = ('title', 'description')

class SubscriberAdmin(admin.ModelAdmin):
    list_display = ('user', )
    search_fields = ('user__username', 'user__email')

class ThreadAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('author',)

class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class DescriptiveAdmin(admin.ModelAdmin):
    list_display = ('title', 'item', 'created_at', 'updated_at')
    search_fields = ('title', 'body')
    list_filter = ('item',)

admin.site.register(LineCategory, LineCategoryAdmin)
admin.site.register(CategoryItem, CategoryItemAdmin)
admin.site.register(Bullet, BulletAdmin)
admin.site.register(Resource, ResourceAdmin)
admin.site.register(Subscriber, SubscriberAdmin)
admin.site.register(Thread, ThreadAdmin)
admin.site.register(SocialLink, SocialLinkAdmin)
admin.site.register(Tag)

admin.site.register(ParagraphSection, DescriptiveAdmin)
admin.site.register(FurtherInfo, DescriptiveAdmin)
admin.site.register(BoldPoint, DescriptiveAdmin)