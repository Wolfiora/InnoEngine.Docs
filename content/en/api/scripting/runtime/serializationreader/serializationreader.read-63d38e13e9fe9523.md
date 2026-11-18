---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.63d38e13e9fe9523021f3c246cb01ba345330bb88fa10e5b49d4a0d743f50e74
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationReader.Read(System.String,System.Type)
title: SerializationReader.Read
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 6bef092110bbd105ded139c4fa5cd7cf5ad05c9f2b9279e1297a18ca287d43d8
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** The required non-empty member name.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

## Returns

The restored value, including null when the declaration permits it; invalid or missing data throws.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The declared type is null.

**Exception `T:System.ArgumentException`:** The member name is empty.

**Exception `T:System.InvalidOperationException`:** The operation has ended or the member is missing, incompatible or unsupported.
