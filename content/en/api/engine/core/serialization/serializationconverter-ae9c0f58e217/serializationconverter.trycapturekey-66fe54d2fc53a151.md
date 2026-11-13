---
uid: api.66fe54d2fc53a1517981904ef29f223eee2aa9a2c782b568c0261a54141da3e2
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.Converters.SerializationConverter\u00601.TryCaptureKey(\u00600,Inno.Core.Serialization.SerializationCaptureKeyBuilder)"
source: xml
reviewed: 43b1f026b8edc05455db5cbedc3ad3e11a931e9c991653a6a4fee0d8889487f1
title: "SerializationConverter\u003CT\u003E.TryCaptureKey"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Optionally declares every input to a snapshot capture without writing data.

**Parameter `value`:** The current registered identity source.

**Parameter `key`:** The borrowed Core key builder, valid only during this synchronous callback.

**Returns:** True only when the complete output is covered; false retains ordinary authoritative capture.

## Remarks

This callback must be pure and complete. It runs only for CaptureSnapshot; ordinary Serialize never uses it. After a changed key, Core verifies the key again before publishing. Default converters do not opt in.
