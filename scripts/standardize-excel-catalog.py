#!/usr/bin/env python3
"""
Estandariza todas las 150 filas de Mesolabpro_Plantilla_Seleccion_Productos.xlsx
para que coincidan de forma homogénea con los encabezados oficiales de la plantilla.
"""

import openpyxl

EXCEL_GDRIVE = "/Users/cristianborrero/Library/CloudStorage/GoogleDrive-infomesolabpro@gmail.com/My Drive/Mesolabpro/06_Catalogo_y_Productos/02_Estudios_de_Mercado_y_Ganadores/Mesolabpro_Plantilla_Seleccion_Productos.xlsx"
EXCEL_REPO = "docs/Mesolabpro/06_Catalogo_y_Productos/02_Estudios_de_Mercado_y_Ganadores/Mesolabpro_Plantilla_Seleccion_Productos.xlsx"

import importlib.util

def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

corp_mod = load_module("update_excel_corporal_30", "scripts/update-excel-corporal-30.py")
cap_mod = load_module("update_excel_capilar_30", "scripts/update-excel-capilar-30.py")
prof_mod = load_module("update_excel_profesional_30", "scripts/update-excel-profesional-30.py")

CORPORAL_PRODUCTS = corp_mod.CORPORAL_PRODUCTS
CAPILAR_PRODUCTS = cap_mod.CAPILAR_PRODUCTS
PROFESIONAL_PRODUCTS = prof_mod.PROFESIONAL_PRODUCTS

def fix_dataset(path):
    print(f"Estandarizando: {path}")
    wb = openpyxl.load_workbook(path)
    ws = wb.active

    # Procesar corporal (62 a 91)
    all_3_cats = [
        (62, CORPORAL_PRODUCTS),
        (92, CAPILAR_PRODUCTS),
        (122, PROFESIONAL_PRODUCTS),
    ]

    for start_row, product_list in all_3_cats:
        for i, p in enumerate(product_list):
            row = start_row + i

            ws[f"A{row}"] = p["id"]
            ws[f"B{row}"] = "Aprobado"
            ws[f"C{row}"] = p["cat"]
            ws[f"D{row}"] = p["sub"]
            ws[f"E{row}"] = p["name"]
            ws[f"F{row}"] = p["supplier"]
            ws[f"G{row}"] = p["dropiId"]
            ws[f"H{row}"] = f"https://app.dropi.co/products/{p['dropiId']}"
            ws[f"I{row}"] = p["costo"]
            ws[f"J{row}"] = p["pvp"]
            
            # Margen %: =(J - I) / J
            ws[f"K{row}"] = f"=(J{row}-I{row})/J{row}"
            # Margen COP: =J - I
            ws[f"L{row}"] = f"=J{row}-I{row}"
            
            ws[f"M{row}"] = "Sí"
            ws[f"N{row}"] = 2
            ws[f"O{row}"] = "Alta / CDN"
            ws[f"P{row}"] = "Completa"
            ws[f"Q{row}"] = p["stock"]
            ws[f"R{row}"] = 3  # Tiempo de envío estándar en días
            ws[f"S{row}"] = 300  # Peso promedio gramos
            ws[f"T{row}"] = f"https://mesolabpro.com.co/producto/{p['slug']}"
            ws[f"U{row}"] = p["nota"]

            # Formatos numéricos
            ws[f"I{row}"].number_format = "$#,##0"
            ws[f"J{row}"].number_format = "$#,##0"
            ws[f"K{row}"].number_format = "0.0%"
            ws[f"L{row}"].number_format = "$#,##0"

    wb.save(path)
    print(f"✓ Guardado y estandarizado con éxito en {path}")

if __name__ == "__main__":
    fix_dataset(EXCEL_GDRIVE)
    fix_dataset(EXCEL_REPO)
