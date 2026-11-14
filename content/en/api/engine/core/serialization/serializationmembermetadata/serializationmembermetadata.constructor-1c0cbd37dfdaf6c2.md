---
uid: api.1c0cbd37dfdaf6c24e49c7a570eef92ee6166aca0794cc47d7ed4db27d8848a6
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationMemberMetadata.#ctor(System.String,System.Type,Inno.Core.Serialization.PropertyVisibility,System.Func{System.Object,System.Object},System.Action{System.Object,System.Object})"
source: xml
reviewed: 7fa658406588488bcde915f86ca4b8cea07782a5163a17a373cee4b5f1e3d914
title: "SerializationMemberMetadata.Constructor"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Defines a member whose access is implemented by the selected metadata provider.

## Parameters

**Parameter `name`:** The exact persistent key.

**Parameter `type`:** The declared value type.

**Parameter `visibility`:** Persistent and runtime access permissions.

**Parameter `getter`:** A read accessor, or null when reading is not permitted.

**Parameter `setter`:** A write accessor, or null when writing is not permitted.

## Exceptions

**Exception `T:System.ArgumentException`:** The name is empty or an accessor required by the visibility is absent.
