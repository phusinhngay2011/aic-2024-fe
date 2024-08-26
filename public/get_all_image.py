import os
import json


def get_all_images(folder_path):
    image_list = []
    # Supported image extensions
    valid_extensions = (".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff")

    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(valid_extensions):
                # Create a dictionary for each image
                image_item = {"url": os.path.join("/", os.path.join(root, file).replace('\\', '/'))}
                image_list.append(image_item)

    return image_list


def save_images_to_json(image_list, json_file):
    with open(json_file, "w") as f:
        json.dump(image_list, f, indent=4)


# Folder containing the images
folder_path = "keyframes"
# Output JSON file
json_file = "images.json"

# Get all images
images = get_all_images(folder_path)
# Save to JSON
save_images_to_json(images, json_file)

print(f"Saved {len(images)} images to {json_file}")
