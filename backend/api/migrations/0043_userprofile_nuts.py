# Generated by Django 4.2.2 on 2023-07-05 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0042_np_end_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='nuts',
            field=models.BooleanField(null=True),
        ),
    ]
