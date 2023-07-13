# Generated by Django 4.1.7 on 2023-04-03 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_alter_meal_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dish',
            name='carbohydrates',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='cooced_vegetables',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='dairy',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='description',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='eggs',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='fat',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='fish',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='fruit',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='kcal',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='marocco',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='pork',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='porsion',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='protein',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='raw_vegetables',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='red_meat',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='spain',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='turkey',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='type',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='white_meat',
        ),
        migrations.RemoveField(
            model_name='meal',
            name='field1',
        ),
        migrations.RemoveField(
            model_name='meal',
            name='field2',
        ),
        migrations.RemoveField(
            model_name='meal',
            name='field3',
        ),
        migrations.AlterField(
            model_name='dish',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='meal',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.DeleteModel(
            name='Calendar',
        ),
    ]