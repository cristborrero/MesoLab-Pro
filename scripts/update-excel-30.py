#!/usr/bin/env python3
"""
Actualiza las 30 filas de Beauty Tech en la plantilla de Google Drive:
Mesolabpro_Plantilla_Seleccion_Productos.xlsx
"""

import openpyxl

EXCEL_PATH = "/Users/cristianborrero/Library/CloudStorage/GoogleDrive-infomesolabpro@gmail.com/My Drive/Mesolabpro/06_Catalogo_y_Productos/02_Estudios_de_Mercado_y_Ganadores/Mesolabpro_Plantilla_Seleccion_Productos.xlsx"

# Lista de 30 productos para la plantilla
PRODUCTS = [
    {
        "id": "001", "cat": "Beauty Tech", "sub": "Depilación Láser IPL",
        "name": "Depiladora Láser IPL Portátil Pro 999.000 Pulsos",
        "supplier": "33580", "dropiId": "1101421", "costo": 50000, "pvp": 139000, "stock": 272,
        "slug": "depiladora-laser-ipl-pro", "nota": "999.000 destellos, sensor de contacto plano, 5 niveles."
    },
    {
        "id": "002", "cat": "Beauty Tech", "sub": "Masajeadores Faciales y Gua Sha LED",
        "name": "Masajeador Facial Gua Sha con Radiofrecuencia y LED",
        "supplier": "2182490", "dropiId": "2182490", "costo": 26500, "pvp": 89000, "stock": 525,
        "slug": "masajeador-gua-sha-radiofrecuencia-led", "nota": "Microcorrientes EMS, radiofrecuencia bimodal y fototerapia roja/azul."
    },
    {
        "id": "003", "cat": "Beauty Tech", "sub": "Electroporadores y Peeling Ultrasónico",
        "name": "Espátula Peeling Ultrasónico Limpieza Facial Profunda",
        "supplier": "55384", "dropiId": "1375642", "costo": 19900, "pvp": 79000, "stock": 983,
        "slug": "espatula-peeling-ultrasonico", "nota": "Oscilación 24 kHz, extracción de comedones sin lesión mecánica."
    },
    {
        "id": "004", "cat": "Beauty Tech", "sub": "Masajeadores Faciales y Gua Sha LED",
        "name": "Masajeador Lifting Cuello y Papada Triple Fototerapia LED",
        "supplier": "2116554", "dropiId": "2116554", "costo": 21000, "pvp": 79000, "stock": 600,
        "slug": "masajeador-cuello-papada-led", "nota": "Cabezal biónico 160°, calor constante a 45°C y triple luz LED."
    },
    {
        "id": "005", "cat": "Beauty Tech", "sub": "Alta Frecuencia y Microcorrientes",
        "name": "Equipo Facial Alta Frecuencia Portátil 4 Electrodos Neón",
        "supplier": "879697", "dropiId": "879697", "costo": 33500, "pvp": 99000, "stock": 298,
        "slug": "equipo-alta-frecuencia-neon", "nota": "Gas Neón puro (naranja), acción bactericida inmediata antiacné."
    },
    {
        "id": "006", "cat": "Beauty Tech", "sub": "Máscaras LED y Fototerapia",
        "name": "Máscara Facial Fototerapia LED 7 Colores Espectro Completo",
        "supplier": "43339", "dropiId": "2281566", "costo": 49970, "pvp": 129000, "stock": 379,
        "slug": "mascara-led-fototerapia-7-colores", "nota": "7 longitudes de onda, rejuvenecimiento celular y control de sebo."
    },
    {
        "id": "007", "cat": "Beauty Tech", "sub": "Dermapen y Microneedling",
        "name": "Dermapen Eléctrico Auto-Microneedling Profesional",
        "supplier": "36223", "dropiId": "1752995", "costo": 70000, "pvp": 149000, "stock": 175,
        "slug": "dermapen-electrico-microneedling-profesional", "nota": "Profundidad regulable 0.25mm a 2.5mm, 5 velocidades de punción."
    },
    {
        "id": "008", "cat": "Beauty Tech", "sub": "Vaporizadores y Saunas Faciales",
        "name": "Vaporizador Facial Iónico con Nano-Niebla Térmica",
        "supplier": "32016", "dropiId": "1192987", "costo": 45000, "pvp": 99000, "stock": 1000,
        "slug": "vaporizador-facial-ionico-nano-niebla", "nota": "Nano-iones térmicos, hidratación celular profunda y apertura de poros."
    },
    {
        "id": "009", "cat": "Beauty Tech", "sub": "Extractores de Poros y Succión",
        "name": "Extractor Hidrofacial por Microburbujas y Succión al Vacío",
        "supplier": "43728", "dropiId": "1824329", "costo": 28000, "pvp": 89000, "stock": 218,
        "slug": "extractor-hidrofacial-microburbujas-vacio", "nota": "Hidrodermoabrasión con doble tanque independiente y 6 boquillas."
    },
    {
        "id": "010", "cat": "Beauty Tech", "sub": "Cavitación y Reducción Corporal",
        "name": "Equipo Cavitador Ultrasónico y EMS Corporal 3 en 1",
        "supplier": "36082", "dropiId": "788821", "costo": 52000, "pvp": 139000, "stock": 249,
        "slug": "cavitador-ultrasonico-ems-corporal-3en1", "nota": "Ultrasonido 1 MHz, infrarrojo térmico y gimnasia pasiva EMS."
    },
    {
        "id": "011", "cat": "Beauty Tech", "sub": "Plasma Pen y Cauterizadores",
        "name": "Lápiz Cauterizador Plasma Pen Recargable",
        "supplier": "197931", "dropiId": "1982303", "costo": 42000, "pvp": 99000, "stock": 100,
        "slug": "plasma-pen-cauterizador-recargable", "nota": "Descarga de microplasma de baja temperatura, 9 niveles."
    },
    {
        "id": "012", "cat": "Beauty Tech", "sub": "Cepillos y Limpiadores Sónicos",
        "name": "Cepillo Limpiador Facial Giratorio 5 en 1 Beauty Care",
        "supplier": "7151", "dropiId": "98860", "costo": 13000, "pvp": 59000, "stock": 200,
        "slug": "cepillo-facial-giratorio-5en1", "nota": "Sistema rotativo con 5 cabezales intercambiables de exfoliación."
    },
    {
        "id": "013", "cat": "Beauty Tech", "sub": "Radiofrecuencia y Electroporación",
        "name": "Dispositivo Radiofrecuencia Facial Tripolar con Fototerapia LED",
        "supplier": "394103", "dropiId": "1851775", "costo": 55900, "pvp": 129000, "stock": 654,
        "slug": "radiofrecuencia-facial-tripolar-led", "nota": "Ondas electromagnéticas tripolares y 5 terapias LED dérmicas."
    },
    {
        "id": "014", "cat": "Beauty Tech", "sub": "Alta Frecuencia y Microcorrientes",
        "name": "Derma Wand Pro Tonificador Facial por Alta Frecuencia",
        "supplier": "144205", "dropiId": "1682676", "costo": 37000, "pvp": 99000, "stock": 382,
        "slug": "derma-wand-pro-tonificador-facial", "nota": "Microcorrientes a 100.000 ciclos/seg con liberación de oxígeno."
    },
    {
        "id": "015", "cat": "Beauty Tech", "sub": "Aparatología Capilar",
        "name": "Cepillo Masajeador Capilar Eléctrico 3D Fototerapia",
        "supplier": "228310", "dropiId": "2097027", "costo": 32000, "pvp": 89000, "stock": 4976,
        "slug": "cepillo-masajeador-capilar-electrico-3d", "nota": "Masaje tridimensional 3D con fototerapia roja y reactivación folicular."
    },
    {
        "id": "016", "cat": "Beauty Tech", "sub": "Aparatología Capilar",
        "name": "Cepillo Masajeador Capilar con Nano Spray de Iones",
        "supplier": "141975", "dropiId": "2222902", "costo": 23000, "pvp": 69000, "stock": 206,
        "slug": "cepillo-capilar-nano-spray-iones", "nota": "Nebulización ultrasónica de lociones capilares y desenredo anti-frizz."
    },
    {
        "id": "017", "cat": "Beauty Tech", "sub": "Ojos y Pestañas Tech",
        "name": "Rizador Térmico de Pestañas Eléctrico con Termorregulación",
        "supplier": "894235", "dropiId": "2168876", "costo": 13000, "pvp": 49000, "stock": 145,
        "slug": "rizador-termico-pestanas-electrico", "nota": "Calor constante a 65-85°C con almohadilla de silicona termoactiva."
    },
    {
        "id": "018", "cat": "Beauty Tech", "sub": "Depilación Láser IPL",
        "name": "Depiladora Facial de Precisión y Perfilador de Cejas",
        "supplier": "49923", "dropiId": "1965520", "costo": 31980, "pvp": 79000, "stock": 1222,
        "slug": "depiladora-facial-cejas-recargable", "nota": "Cabezal microquirúrgico dual hipoalergénico con luz LED auxiliar."
    },
    {
        "id": "019", "cat": "Beauty Tech", "sub": "Depilación Láser IPL",
        "name": "Depiladora Facial Multifunción 4 en 1 para Rostro y Cuerpo",
        "supplier": "32016", "dropiId": "242034", "costo": 24000, "pvp": 69000, "stock": 676,
        "slug": "depiladora-facial-multifuncion-4en1", "nota": "Kit 4 en 1 para rostro, cejas, nariz y zona bikini sin tirones."
    },
    {
        "id": "020", "cat": "Beauty Tech", "sub": "Vaporizadores y Saunas Faciales",
        "name": "Sauna Facial con Inhalador Térmico Spa para Hidratación",
        "supplier": "49923", "dropiId": "1965189", "costo": 52777, "pvp": 119000, "stock": 1466,
        "slug": "sauna-facial-inhalador-termico-spa", "nota": "Máscara facial ergonómica y cono nasal para aromaterapia y limpieza."
    },
    {
        "id": "021", "cat": "Beauty Tech", "sub": "Masajeadores Faciales y Gua Sha LED",
        "name": "Dispositivo Esculpidor de Rostro y Reductor SkinLift V-Face",
        "supplier": "96165", "dropiId": "2228164", "costo": 29000, "pvp": 79000, "stock": 452,
        "slug": "tonificador-rostro-papada-skinlift", "nota": "Banda anatómica EMS con fototerapia roja/azul para contorno mandibular."
    },
    {
        "id": "022", "cat": "Beauty Tech", "sub": "Cavitación y Reducción Corporal",
        "name": "Dispositivo Reafirmante Esculpidor Corporal EMS",
        "supplier": "96165", "dropiId": "2290771", "costo": 46000, "pvp": 119000, "stock": 208,
        "slug": "esculpidor-tonificador-corporal-ems", "nota": "Electroestimulación muscular profunda de alta frecuencia para abdomen y piernas."
    },
    {
        "id": "023", "cat": "Beauty Tech", "sub": "Alta Frecuencia y Microcorrientes",
        "name": "Masajeador Facial de Microcorrientes Bipolar y Esferas 3D",
        "supplier": "49923", "dropiId": "2185008", "costo": 16270, "pvp": 59000, "stock": 2688,
        "slug": "masajeador-microcorriente-esferas-3d", "nota": "Esferas giratorias a 70° que reproducen pinzamiento dérmico profesional."
    },
    {
        "id": "024", "cat": "Beauty Tech", "sub": "Extractores de Poros y Succión",
        "name": "Extractor de Puntos Negros Eléctrico con Pantalla LCD",
        "supplier": "55394", "dropiId": "339276", "costo": 25000, "pvp": 69000, "stock": 124,
        "slug": "extractor-puntos-negros-pantalla-lcd", "nota": "Pantalla digital LCD con 3 potencias de succión y 5 boquillas ergonómicas."
    },
    {
        "id": "025", "cat": "Beauty Tech", "sub": "Cepillos y Limpiadores Sónicos",
        "name": "Cepillo Limpiador Facial de Drenaje Linfático y Silicona",
        "supplier": "6006", "dropiId": "2212435", "costo": 12890, "pvp": 49000, "stock": 562,
        "slug": "cepillo-facial-drenaje-linfatico", "nota": "Silicona médica no porosa con reverso estriado para drenaje linfático."
    },
    {
        "id": "026", "cat": "Beauty Tech", "sub": "Dermapen y Microneedling",
        "name": "Dermapen Inalámbrico Metálico de Alta Precisión",
        "supplier": "325736", "dropiId": "1474508", "costo": 112443, "pvp": 229000, "stock": 1000,
        "slug": "dermapen-inalambrico-metalico-alta-precision", "nota": "Cuerpo de aluminio aeronáutico y motor de alta estabilidad sin oscilación."
    },
    {
        "id": "027", "cat": "Beauty Tech", "sub": "Radiofrecuencia y Electroporación",
        "name": "Aparato de Electroporación y Mesoterapia Virtual Transdérmica",
        "supplier": "13615", "dropiId": "340169", "costo": 45900, "pvp": 129000, "stock": 93,
        "slug": "electroporacion-mesoterapia-virtual-transdermica", "nota": "Permeabilidad transmembrana para absorción de principios activos sin aguja."
    },
    {
        "id": "028", "cat": "Beauty Tech", "sub": "Vaporizadores y Saunas Faciales",
        "name": "Vaporizador Facial Portátil Nano-Mister Recargable",
        "supplier": "568979", "dropiId": "2038149", "costo": 8000, "pvp": 39000, "stock": 200,
        "slug": "vaporizador-portatil-nano-mister-recargable", "nota": "Atomización ultrasónica de bolsillo para hidratación y fijación de maquillaje."
    },
    {
        "id": "029", "cat": "Beauty Tech", "sub": "Alta Frecuencia y Microcorrientes",
        "name": "Dispositivo Rejuvenecedor Bio-Microcorriente con Rodillos 3D",
        "supplier": "28386", "dropiId": "2198990", "costo": 13000, "pvp": 49000, "stock": 299,
        "slug": "rejuvenecedor-bio-microcorriente-rodillos-3d", "nota": "Panel solar captador de luz ambiental que genera bio-microcorrientes continuas."
    },
    {
        "id": "030", "cat": "Beauty Tech", "sub": "Masajeadores Faciales y Gua Sha LED",
        "name": "Ejercitador Mandibular y Perfilador de Mentón Grado Médico",
        "supplier": "36082", "dropiId": "2194593", "costo": 18000, "pvp": 49000, "stock": 499,
        "slug": "ejercitador-mandibular-perfilador-menton", "nota": "Silicona biocompatible de 30-50 lbs para tonificación del músculo masetero."
    }
]

def main():
    print(f"Cargando libro: {EXCEL_PATH}")
    wb = openpyxl.load_workbook(EXCEL_PATH)
    ws = wb['Selección_Productos']

    for idx, p in enumerate(PRODUCTS, start=2):
        ws.cell(row=idx, column=1).value = p["id"]
        ws.cell(row=idx, column=2).value = "✅ Aprobado"
        ws.cell(row=idx, column=3).value = p["cat"]
        ws.cell(row=idx, column=4).value = p["sub"]
        ws.cell(row=idx, column=5).value = p["name"]
        ws.cell(row=idx, column=6).value = f"Proveedor Verificado #{p['supplier']}"
        ws.cell(row=idx, column=7).value = p["dropiId"]
        ws.cell(row=idx, column=8).value = f"https://app.dropi.co/products/{p['dropiId']}"
        ws.cell(row=idx, column=9).value = p["costo"]
        ws.cell(row=idx, column=10).value = p["pvp"]
        ws.cell(row=idx, column=11).value = f"=(J{idx}-I{idx})/J{idx}"
        ws.cell(row=idx, column=12).value = f"=J{idx}-I{idx}"
        ws.cell(row=idx, column=13).value = "✅ Sí"
        ws.cell(row=idx, column=14).value = 5
        ws.cell(row=idx, column=15).value = "Alta"
        ws.cell(row=idx, column=16).value = "Sí"
        ws.cell(row=idx, column=17).value = p["stock"]
        ws.cell(row=idx, column=18).value = 2
        ws.cell(row=idx, column=19).value = 350
        ws.cell(row=idx, column=20).value = "Media"
        ws.cell(row=idx, column=21).value = "📈 Subiendo"
        ws.cell(row=idx, column=22).value = 9.0
        ws.cell(row=idx, column=23).value = p["nota"]
        ws.cell(row=idx, column=24).value = "2026-10-10"
        ws.cell(row=idx, column=25).value = "Sí"
        ws.cell(row=idx, column=26).value = "2026-10-10"
        ws.cell(row=idx, column=27).value = f"https://mesolabpro.com.co/producto/{p['slug']}"

    wb.save(EXCEL_PATH)
    print(f"✓ ¡30 productos actualizados con éxito en Google Drive!")

if __name__ == "__main__":
    main()
