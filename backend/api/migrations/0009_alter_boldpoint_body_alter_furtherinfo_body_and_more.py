# Generated by Django 5.1.1 on 2024-10-12 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_boldpoint_title_alter_furtherinfo_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='boldpoint',
            name='body',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='furtherinfo',
            name='body',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='paragraphsection',
            name='body',
            field=models.TextField(blank=True, null=True),
        ),
    ]