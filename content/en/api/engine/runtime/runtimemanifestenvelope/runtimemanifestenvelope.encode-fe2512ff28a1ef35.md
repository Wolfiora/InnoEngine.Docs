---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fe2512ff28a1ef358f7456ce65471965124a50c5cb7deb578ac5dc72ca15d2ae
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.Encode(Inno.Runtime.GameRuntimeManifest,Inno.Core.Serialization.SerializationGeneration)
title: RuntimeManifestEnvelope.Encode
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: 2049bfb6e1c2bd2faf90bab690893d03544fe23be32f1d262264e753ef7bbf4b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `manifest`:** The manifest whose application identity and serialized payload must agree.

**Parameter `serialization`:** The immutable converter generation captured for the surrounding build transaction.

## Returns

The complete deterministic deployment envelope.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `manifest` is `null`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the manifest is not valid for Player startup.
