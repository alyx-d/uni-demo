import os

def rename_images():
    # 获取当前目录下的所有文件
    files = os.listdir('.')
    # 过滤出图片文件（假设图片格式为jpg和png）
    images = [f for f in files if f.endswith(('.jpg', '.png','.avif'))]
    
    # 遍历图片文件并重命名
    for index, image in enumerate(images, start=1):
        # 构造新的文件名
        new_name = f"img-{index}{os.path.splitext(image)[1]}"
        # 重命名文件
        os.rename(image, new_name)
        print(f"Renamed {image} to {new_name}")

# 调用函数
rename_images()
