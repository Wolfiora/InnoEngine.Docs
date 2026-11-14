---
uid: api.c0403bd77d9c42dffcee889c28fa4ddb2d85e4da66a7056c5bace290a8eeb4cf
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.OnCleanupFailed(System.String,System.Exception)"
source: xml
reviewed: 7d738cda088b33bc1b9e3ceed24c8959268b1324c4ffaf320ba9709543b8fc50
title: "TypeRegistry\u003CTSnapshot\u003E.OnCleanupFailed"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Reports an exception raised while rolling back activation, completing activation, or releasing a snapshot.

## Parameters

**Parameter `phase`:** The non-transactional phase that raised the exception.

**Parameter `exception`:** The cleanup exception.

## Remarks

This callback is diagnostic only. Exceptions raised by an override are ignored so cleanup can continue.
