import os
import zipfile

snapfiles = '/Users/skno/Downloads/snapfiles'

extracted = '/Users/skno/Documents/course_careers/javascript/react/snapmap/public/extracted'

for root, dirs, files in os.walk(snapfiles):
    print('\n')
    print("Current directory:", root)
    print("Subdirectories:", dirs)
    print("Files:", files)
    
    for file in files:
        if file.endswith(".zip"):
            zip_file_path = os.path.join(root, file)
            print(f"I found a zip file here to extract: {zip_file_path}")
            
            with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
                
                # extract to specified directory
                zip_ref.extractall(extracted)
                print("Extraction to ", extracted, "successful")
            