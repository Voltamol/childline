# Generated by Django 5.1.1 on 2024-10-12 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sociallink',
            name='url',
            field=models.URLField(default='/'),
        ),
    ]
