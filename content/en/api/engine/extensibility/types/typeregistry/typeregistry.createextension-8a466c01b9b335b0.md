---
uid: api.8a466c01b9b335b072d3fc3db4ac5a89c4ede1169701d0e15f145b488b37f1d1
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.CreateExtension\u0060\u00601(System.Type)"
source: xml
reviewed: 6c99817165de68e2de5eaaa6285d1df11bea3a92853f6db5090a402ea2885de5
title: "TypeRegistry\u003CTSnapshot\u003E.CreateExtension"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Creates a validated extension instance using a parameterless constructor.

## Type parameters

**Type parameter `TExtension`:** The required extension contract.

## Parameters

**Parameter `type`:** The concrete implementation type.

## Returns

A newly created extension, retained for rollback until the complete candidate snapshot takes ownership.
