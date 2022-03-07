from rest_framework import serializers
from .models import Category,Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields=(
            "id",
            "name",
            "get_absolute_urls"
            "description"
            "price",
            "get_image",
            "get_thumbnail",
        )
