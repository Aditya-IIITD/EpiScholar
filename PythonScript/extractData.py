import pandas as pd
import json

# Loading the Excel file
file_path = 'assignmentData.xlsx'
excel_data = pd.ExcelFile(file_path)

# Extracting data from sheet and saving to a dictionary
data = {}
for sheet in excel_data.sheet_names:
    data[sheet] = excel_data.parse(sheet).to_dict(orient='records')

# Saving the extracted data to a JSON file
json_file_path = 'data.json'
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file)

print("Data extraction complete.")
