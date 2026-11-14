---
uid: api.1e9a7cb6b02e202127ba04c2c97f140066b01a291998a49bc89ebca6ecff6e05
symbol: "engine:Inno.Content:M:Inno.Content.ContentPackIndexCodec.Encode(Inno.Content.ContentPackIndex,Inno.Core.Serialization.SerializationGeneration)"
source: xml
reviewed: 5ef04d65945803d775bf4bbe5dcdc26abd7bb8084e5cf4b13cc567a589bd6b96
title: "ContentPackIndexCodec.Encode"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Captures the entire index with the operation's pinned converter generation.

## Parameters

**Parameter `index`:** The validated immutable inventory.

**Parameter `serialization`:** The borrowed generation shared by the enclosing build transaction.

## Returns

Newly owned deterministic index bytes.
