# Generated by Django 4.2.1 on 2023-05-31 09:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0031_remove_meal_carbohydrates_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_adult_en',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_adult_m',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_child_1_en',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_child_1_m',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_child_2_en',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_child_2_m',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_child_3_en',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_child_3_m',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_child_4_en',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='ingredients_child_4_m',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='name_en',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='name_m',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='recipe_en',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='recipe_m',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='tip_en',
        ),
        migrations.RemoveField(
            model_name='dish',
            name='tip_m',
        ),
        migrations.RemoveField(
            model_name='meal',
            name='name_en',
        ),
        migrations.RemoveField(
            model_name='meal',
            name='name_m',
        ),
        migrations.AlterField(
            model_name='dish',
            name='type',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.CreateModel(
            name='Meal_language',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, null=True)),
                ('meal_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.meal')),
            ],
        ),
        migrations.CreateModel(
            name='Dish_language',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, null=True)),
                ('ingredients_child_1', models.CharField(max_length=500, null=True)),
                ('ingredients_child_2', models.CharField(max_length=500, null=True)),
                ('ingredients_child_3', models.CharField(max_length=500, null=True)),
                ('ingredients_child_4', models.CharField(max_length=500, null=True)),
                ('ingredients_adult', models.CharField(max_length=500, null=True)),
                ('recipe', models.CharField(max_length=500, null=True)),
                ('tip', models.CharField(max_length=500, null=True)),
                ('dish_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.dish')),
            ],
        ),
    ]
