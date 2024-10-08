from django.db import models
from django.contrib.auth.models import AbstractUser , BaseUserManager,Group, Permission
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.urls import reverse
from django.conf import settings




"""class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    class Meta:
        app_label = 'DjangoEcommerceApp'

class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)"""

"""class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)

    groups = models.ManyToManyField(
        Group,
        related_name='customuser_groups',  # Change related_name to avoid conflict
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_permissions',  # Change related_name to avoid conflict
        blank=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    class Meta:
        app_label = 'DjangoEcommerceApp'"""




# Create your models here.
"""class CustomUser(AbstractUser):
    user_type_choices=((1,"Admin"),(2,"Staff"),(3,"Merchant"),(4,"Customer"))
    user_type=models.CharField(max_length=255,choices=user_type_choices,default=1)"""

class CustomUser(AbstractUser):
    USER_TYPE_CHOICES = (
        (1, "Admin"),
        (2, "Staff"),
        (3, "Merchant"),
        (4, "Customer"),
    )

    user_type = models.IntegerField(choices=USER_TYPE_CHOICES, default=4)

    def is_customer(self):
        return self.user_type == 4

class UserProfile(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    mobile_number = models.CharField(max_length=20)
    image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    address = models.TextField()

    def __str__(self):
        return self.full_name

class AdminUser(models.Model):
    profile_pic=models.FileField(default="")
    auth_user_id=models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)

class StaffUser(models.Model):
    profile_pic=models.FileField(default="")
    auth_user_id=models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)

class MerchantUser(models.Model):
    auth_user_id=models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    profile_pic=models.FileField(default="")
    company_name=models.CharField(max_length=255)
    gst_details=models.CharField(max_length=255)
    address=models.TextField()
    is_added_by_admin=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    objects=models.Manager()


class CustomerUser(models.Model):
    auth_user_id=models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    profile_pic=models.FileField(default="")
    created_at=models.DateTimeField(auto_now_add=True)


class Categories(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    url_slug=models.CharField(max_length=255)
    thumbnail=models.FileField()
    description=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)

    def get_absolute_url(self):
        return reverse("category_list")

    def __str__(self):
        return self.title
    
    


class SubCategories(models.Model):
    id=models.AutoField(primary_key=True)
    category_id=models.ForeignKey(Categories,on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    url_slug=models.CharField(max_length=255)
    thumbnail=models.FileField()
    description=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)

    def get_absolute_url(self):
        return reverse("sub_category_list")
    


class Products(models.Model):
    id=models.AutoField(primary_key=True)
    url_slug=models.CharField(max_length=255)
    subcategories_id=models.ForeignKey(SubCategories,on_delete=models.CASCADE)
    product_name=models.CharField(max_length=255)
    brand=models.CharField(max_length=255)
    product_max_price=models.CharField(max_length=255)
    product_discount_price=models.CharField(max_length=255)
    product_description=models.TextField()
    product_long_description=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    added_by_merchant=models.ForeignKey(MerchantUser,on_delete=models.CASCADE)
    in_stock_total=models.IntegerField(default=1)
    is_active=models.IntegerField(default=1)

class ProductMedia(models.Model):
    id=models.AutoField(primary_key=True)
    product_id=models.ForeignKey(Products,on_delete=models.CASCADE)
    media_type_choice=((1,"Image"),(2,"Video"))
    media_type=models.CharField(max_length=255)
    media_content=models.FileField()
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)  

class ProductTransaction(models.Model):
    id=models.AutoField(primary_key=True)
    transaction_type_choices=((1,"BUY"),(2,"SELL"))
    product_id=models.ForeignKey(Products,on_delete=models.CASCADE)
    transaction_product_count=models.IntegerField(default=1)
    transaction_type=models.CharField(choices=transaction_type_choices,max_length=255)
    transaction_description=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)


class ProductDetails(models.Model):
    id=models.AutoField(primary_key=True)
    product_id=models.ForeignKey(Products,on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    title_details=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)

class ProductAbout(models.Model):
    id=models.AutoField(primary_key=True)
    product_id=models.ForeignKey(Products,on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)

class ProductTags(models.Model):
    id=models.AutoField(primary_key=True)
    product_id=models.ForeignKey(Products,on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)

class ProductQuestions(models.Model):
    id=models.AutoField(primary_key=True)
    product_id=models.ForeignKey(Products,on_delete=models.CASCADE)
    user_id=models.ForeignKey(CustomerUser,on_delete=models.CASCADE)
    question=models.TextField()
    answer=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)

class ProductReviews(models.Model):
    id=models.AutoField(primary_key=True)
    product_id=models.ForeignKey(Products,on_delete=models.CASCADE)
    user_id=models.ForeignKey(CustomerUser,on_delete=models.CASCADE)
    review_image=models.FileField()
    rating=models.CharField(default="5",max_length=255)
    review=models.TextField(default="")
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)

class ProductReviewVoting(models.Model):
    id=models.AutoField(primary_key=True)
    product_review_id=models.ForeignKey(ProductReviews,on_delete=models.CASCADE)
    user_id_voting=models.ForeignKey(CustomerUser,on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)
    is_active=models.IntegerField(default=1)

class ProductVarient(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)

class ProductVarientItems(models.Model):
    id=models.AutoField(primary_key=True)
    product_varient_id=models.ForeignKey(ProductVarient,on_delete=models.CASCADE)
    product_id=models.ForeignKey(Products,on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)

class CustomerOrders(models.Model):
    id=models.AutoField(primary_key=True)
    product_id=models.ForeignKey(Products,on_delete=models.DO_NOTHING)
    purchase_price=models.CharField(max_length=255)
    coupon_code=models.CharField(max_length=255)
    discount_amt=models.CharField(max_length=255)
    product_status=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)

class OrderDeliveryStatus(models.Model):
    id=models.AutoField(primary_key=True)
    order_id=models.ForeignKey(CustomerOrders,on_delete=models.CASCADE)
    status=models.CharField(max_length=255)
    status_message=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)


@receiver(post_save,sender=CustomUser)
def create_user_profile(sender,instance,created,**kwargs):
    if created:
        if instance.user_type==1:
            AdminUser.objects.create(auth_user_id=instance)
        if instance.user_type==2:
            StaffUser.objects.create(auth_user_id=instance)
        if instance.user_type==3:
            MerchantUser.objects.create(auth_user_id=instance,company_name="",gst_details="",address="")
        if instance.user_type==4:
            CustomerUser.objects.create(auth_user_id=instance)            

@receiver(post_save,sender=CustomUser)
def save_user_profile(sender,instance,**kwargs):
    if instance.user_type==1:
        instance.adminuser.save()
    if instance.user_type==2:
        instance.staffuser.save()
    if instance.user_type==3:
        instance.merchantuser.save()
    if instance.user_type==4:

        instance.customeruser.save()

        instance.customeruser.save()


# jewellery-store modals table

class Jewellery_store_cat(models.Model):
    earrings_image = models.ImageField(upload_to='images/')
    rings_image = models.ImageField(upload_to='images/')
    bracelet_image = models.ImageField(upload_to='images/')
    necklace_image = models.ImageField(upload_to='images/')


class Featured_products(models.Model):
    date_time = models.DateTimeField(auto_now_add=True)
    featured_product_image = models.ImageField(upload_to='images/')
    featured_product_title = models.CharField(max_length=255)
    featured_product_price = models.CharField(max_length=255)


class Instagram_image(models.Model):
    instagram_img1 = models.ImageField(upload_to='images/')
    instagram_img2 = models.ImageField(upload_to='images/')
    instagram_img3 = models.ImageField(upload_to='images/')
    instagram_img4 = models.ImageField(upload_to='images/')
    instagram_img5 = models.ImageField(upload_to='images/')
    instagram_img6 = models.ImageField(upload_to='images/')



class Categories_images(models.Model):
    earrings_image = models.ImageField(upload_to='images/')
    rings_image = models.ImageField(upload_to='images/')
    bracelet_image = models.ImageField(upload_to='images/')
    necklace_image = models.ImageField(upload_to='images/')
    Bangles_image = models.ImageField(upload_to='images/')
    Pendants_image = models.ImageField(upload_to='images/')
    Chain_image = models.ImageField(upload_to='images/')


class Blog_c(models.Model):
    image = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)


class Slider_home(models.Model):
    slider_img_left1 = models.ImageField(upload_to='images/')
    slider_img_right1 = models.ImageField(upload_to='images/')
    slider_img_left2 = models.ImageField(upload_to='images/')
    slider_img_right2 = models.ImageField(upload_to='images/')
    slider_img_left3 = models.ImageField(upload_to='images/')
    slider_img_right3 = models.ImageField(upload_to='images/')

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15, blank=True, null=True)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class My_user(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)