from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    LineCategoryViewSet,
    CategoryItemViewSet,
    ParagraphSectionViewSet,
    FurtherInfoViewSet,
    BoldPointViewSet,
    TagViewSet,
    BulletViewSet,
    ResourceViewSet,
    ResourceDownloadView,
    SubscriberViewSet,
    ThreadViewSet,
    SocialLinkViewSet,
    LoginView,
    SignupView
)

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'linecategories', LineCategoryViewSet)
router.register(r'categoryitems', CategoryItemViewSet)
router.register(r'paragraphsections', ParagraphSectionViewSet)
router.register(r'furtherinfo', FurtherInfoViewSet)
router.register(r'boldpoints', BoldPointViewSet)
router.register(r'tags', TagViewSet)
router.register(r'bullets', BulletViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'subscribers', SubscriberViewSet)
router.register(r'threads', ThreadViewSet)
router.register(r'sociallinks', SocialLinkViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('resources/<int:pk>/download/', ResourceDownloadView.as_view(), name='resource-download'),
    path('', include(router.urls)),
]