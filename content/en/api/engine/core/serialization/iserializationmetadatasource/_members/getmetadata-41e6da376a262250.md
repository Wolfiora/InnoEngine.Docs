---
uid: api.41e6da376a2622508da67d9291211262fbd92315efd9ed25804b2ce343f8847c
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.ISerializationMetadataSource.GetMetadata(System.Type)"
source: xml
reviewed: 593adc722b619ce5b8e6cbbc7894bc01fcf3e7d0806c7e48fda803a763ca784e
title: "GetMetadata"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Resolves a complete serialization shape for the current declaration.

**Parameter `type`:** The exact closed declaration, including its generic arguments.

**Returns:** Immutable access metadata; an unsupported declaration throws instead of probing another provider.
