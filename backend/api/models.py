from django.db import models
from django.contrib.auth.models import AbstractUser

class LineCategory(models.Model):
    lines=[
        ('Teachers & professionals','Teachers & professionals'),
        ('Parents & carers','Parents & carers'),
        ('4–11 year olds','4–11 year olds'),
        ('11–18 year olds','11–18 year olds'),
    ]
    name = models.CharField(max_length=100,choices=lines)
    description = models.TextField(default='')

    
    class Meta:
        verbose_name = "Line Category"
        verbose_name_plural = "Line Categories"

    def __str__(self):
        return self.name

class CategoryItem(models.Model):
    service_line = models.ForeignKey(LineCategory, related_name='items', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Category Item"
        verbose_name_plural = "Category Items"

    def __str__(self):
        return f"{self.name} ({self.service_line})"

class Descriptive(models.Model):
    title = models.CharField(max_length=150,null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True

    def __str__(self):
        return self.item.name

class ParagraphSection(Descriptive):
    item = models.ForeignKey(CategoryItem,related_name='paragraphs' ,on_delete=models.CASCADE)
    ...

class FurtherInfo(Descriptive):
    item = models.ForeignKey(CategoryItem,related_name='further_info' ,on_delete=models.CASCADE)
    ...

class BoldPoint(Descriptive):
    item = models.ForeignKey(CategoryItem,related_name='bold_points' ,on_delete=models.CASCADE)
    ...

class Tag(models.Model):
    item = models.ForeignKey(CategoryItem,related_name='tags', on_delete=models.CASCADE)
    name=models.CharField(max_length=255)

class Bullet(models.Model):
    item = models.ForeignKey(CategoryItem, related_name='bullets',on_delete=models.CASCADE)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Bullet Point"
        verbose_name_plural = "Bullet Points"

    def __str__(self):
        return self.body

class CardModel(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    cover_image = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.title

class Resource(CardModel):
    ...

    
class Subscriber(AbstractUser):
    
    authorized_to_edit=models.BooleanField(default=False)

    def __str__(self):
        return self.username 

class Thread(CardModel):
    author = models.ForeignKey(Subscriber, on_delete=models.CASCADE, related_name='threads')
    
class SocialLink(models.Model):
    social_choices = [
        ('twitter', 'Twitter'),
        ('facebook', 'Facebook'),
        ('instagram', 'Instagram'),
        ('linkedin', 'LinkedIn')
    ]
    name = models.CharField(max_length=50, choices=social_choices)
    url=models.URLField(default='/')

    class Meta:
        verbose_name = "Social Link"
        verbose_name_plural = "Social Links"

    def __str__(self):
        return self.name