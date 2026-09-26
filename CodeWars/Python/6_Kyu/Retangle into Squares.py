def sq_in_rect(lng, wdth):
    # -------------------------
    if lng == wdth:
        return None
    
    # -------------------------
    else:
        # ---------------------------
        # Lista que irá receber os quadrados
        lista_quadrados = []
        
        # -----------------------
        area_retangulo = lng * wdth
        maximo = max(lng, wdth)
        minimo = min(lng, wdth)
        auxiliar = 0
        # --------------------------
        
        # ---------------------------------------------
        for quadrado in range(min(lng, wdth), 0, -1):
            if quadrado ** 2 <= area_retangulo and (quadrado <= minimo):
                while quadrado ** 2 <= area_retangulo:
                    auxiliar = minimo
                    maximo = max(maximo, minimo) - quadrado
                    minimo = auxiliar
                    if maximo < minimo:
                        auxiliar = maximo
                        maximo = minimo
                        minimo = auxiliar
                    area_retangulo = area_retangulo - (quadrado ** 2)
                    lista_quadrados.append(quadrado)
                
            elif 0 < area_retangulo < 4:
                while quadrado ** 2 <= area_retangulo:
                    lista_quadrados.append(1)
                    maximo = max(lng, wdth) - min(lng, wdth)
                    minimo = min(maximo, minimo)
                    area_retangulo = area_retangulo - (quadrado ** 2)
        # ----------------------------------------------
        
        return lista_quadrados 
