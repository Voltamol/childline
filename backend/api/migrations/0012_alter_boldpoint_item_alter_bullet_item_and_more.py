# Generated by Django 5.1.1 on 2024-10-12 14:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_linecategory_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='boldpoint',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bold_points', to='api.categoryitem'),
        ),
        migrations.AlterField(
            model_name='bullet',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bullets', to='api.categoryitem'),
        ),
        migrations.AlterField(
            model_name='furtherinfo',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='further_info', to='api.categoryitem'),
        ),
        migrations.AlterField(
            model_name='paragraphsection',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='paragraphs', to='api.categoryitem'),
        ),
    ]
