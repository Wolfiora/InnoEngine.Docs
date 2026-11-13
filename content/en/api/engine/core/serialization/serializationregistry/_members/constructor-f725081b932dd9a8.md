---
uid: api.f725081b932dd9a8500ce63875afe906af875c378370c144d7f18da98fd20058
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.ISerializationMetadataSource)"
source: xml
reviewed: 63fa03741261be4a4a0eddc65e2c04caa1dcec09fcee48409c877784cdcdbe52
title: "Constructor"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Creates a serialization registry derived from one isolated type catalog.

**Parameter `types`:** The type catalog that owns converter extension generations.

**Exception `T:System.ArgumentNullException`:** Thrown when `types` is null.

**Parameter `metadata`:** The declaration access provider selected by the same composition root.
