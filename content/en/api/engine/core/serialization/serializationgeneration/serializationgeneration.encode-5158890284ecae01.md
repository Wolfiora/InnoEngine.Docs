---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5158890284ecae017a569709f4555133309f7868efcb544fa3de87d4c3c4e3d8
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationGeneration.Encode(System.Action{Inno.Core.Serialization.SerializationWriter},Inno.Core.Serialization.SerializationContext)
title: SerializationGeneration.Encode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: f605fa07d5a98e7d7a8248b8f31810f3fb88b19be476fc814a8e1873bbb79dc6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `write`:** The callback that writes the complete root object.

**Parameter `context`:** Optional immutable converter context for this operation.

## Returns

Deterministic binary data containing the structured root.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this generation has already been disposed.
