---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.66fe54d2fc53a1517981904ef29f223eee2aa9a2c782b568c0261a54141da3e2
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.Converters.SerializationConverter`1.TryCaptureKey(`0,Inno.Core.Serialization.SerializationCaptureKeyBuilder)
title: SerializationConverter<T>.TryCaptureKey
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: dcb8882287cf1f074766eed24b45c8567a38843ea6ac94936fe9b8813ab4e2b3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The current registered identity source.

**Parameter `key`:** The borrowed Core key builder, valid only during this synchronous callback.

## Returns

True only when the complete output is covered; false retains ordinary authoritative capture.

## Remarks

This callback must be pure and complete. It runs only for CaptureSnapshot; ordinary Serialize never uses it. After a changed key, Core verifies the key again before publishing. Default converters do not opt in.
