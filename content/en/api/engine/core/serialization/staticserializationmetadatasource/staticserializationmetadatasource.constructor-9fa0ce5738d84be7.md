---
uid: api.9fa0ce5738d84be77b899c222ab29f2a3ce8f362de8cbc73a430bdeb05ec4bd3
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.StaticSerializationMetadataSource.#ctor(System.Collections.Generic.IReadOnlyList{System.Action{System.Action{Inno.Core.Serialization.SerializationTypeMetadata}}})"
source: xml
reviewed: 0db7ebb50a76d0f41ada2212142267186b1df501aa3e158b14b8959dac627500
title: "StaticSerializationMetadataSource.Constructor"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Freezes generated declaration contributions supplied by the Player composition.

## Parameters

**Parameter `catalogs`:** Assembly-local registration methods; delegates are released after construction.

## Exceptions

**Exception `T:System.ArgumentException`:** A registration is null or two assemblies disagree about a closed shape.
