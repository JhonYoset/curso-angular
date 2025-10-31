import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!array || !field) {
      return array;
    }

    const sortedArray = [...array];

    sortedArray.sort((a, b) => {
      // Obtener el valor del campo, soportando propiedades anidadas (ej: 'artist.name')
      const valueA = this.getNestedProperty(a, field);
      const valueB = this.getNestedProperty(b, field);

      // Manejar valores nulos o indefinidos
      if (valueA == null && valueB == null) return 0;
      if (valueA == null) return order === 'asc' ? 1 : -1;
      if (valueB == null) return order === 'asc' ? -1 : 1;

      // Comparar strings (case-insensitive)
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        const comparison = valueA
          .toLowerCase()
          .localeCompare(valueB.toLowerCase());
        return order === 'asc' ? comparison : -comparison;
      }

      // Comparar números o fechas
      if (valueA < valueB) {
        return order === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return order === 'asc' ? 1 : -1;
      }

      return 0;
    });

    return sortedArray;
  }

  /**
   * Obtiene el valor de una propiedad anidada usando notación de punto
   * Ej: 'artist.name' obtiene obj.artist.name
   */
  private getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
  }
}
