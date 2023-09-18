---
slug: /transactions
sidebar_position: 2
---

# Transacciones

Las transacciones son operaciones númeradas e inmutables que funcionan como medio para interactuar con otro fin. Por ejemplo una ejecución de una solicitud de fondo genera una transacción de tipo cuenta que debita fondos de la cuenta bancara o caja chica seleciconada. La misma mantiene el monto de la transacción, el monto previo a la transacción y el balance actual.

La razón de la existencia de las transacciones es de traer rápidamente y sin mucho trabajo para la base de datos el valor total de ya sea la cuenta bancaria, caja chica, linae presupuestaria o proyecto.

## Tipos de transacciones:

Existen 6 tipos distintos de transacciones

### 1. Cuenta

Las transacciones de tipo cuenta afectan directamente a las cuentas bancarias o cajas chicas. Mantienen el balance de las mismas. La última transacción relacionada con una cuenta siempre va a tener el total dispnible.

### 2. Linea presupuestaria

Las transacciones de tipo linea presupuestaria son creadas cuando un usuario genera una rendición y la misma tiene un proyecto y linea presupuestaria seleccionada. Esta transacción siempre suma, de esta manera sumando para tener un total ejecutado por linea presupuestaria.

### 3. Devolución

Una transacción de tipo Devolución se genera cuando un usuario devuelve algun monto. La misma afecta a las cuentas bancarias o cajas chicas. Requiere un comprobante adjunto en donde se demuestre que el usuario realmente genero una devolución a la cuenta bancaria o caja chica especificada.

### 4. Desembolso a cuenta

Una transacción de tipo desembolso a cuenta es generada al crearse un desembolso. La misma afecta directamente a una cuenta bancaria o caja chica y siempre suma montos.

### 5. Desembolso a proyecto

Un desembolso puede o no generar tambien a su vez un desembolso a proyectos. El desembolso a proyectos sirve para llevar un registro de los fondos que cada proyecto recibió. A diferencia de los fondos que fueron asignados al mismo.

### 6. Ajuste

Una transacción de tipo ajuste se genera para corregir un desbalance entre la base de datos y los fondos de una cuenta bancaria o caja chica. Es una manera de rectificar datos y debe usarse con precaución.
