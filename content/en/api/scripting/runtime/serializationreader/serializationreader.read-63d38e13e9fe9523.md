---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.63d38e13e9fe9523021f3c246cb01ba345330bb88fa10e5b49d4a0d743f50e74
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationReader.Read(System.String,System.Type)
title: SerializationReader.Read
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: f0dc708ef70de3f8857be3c6939720e60cf054816ee650fb25111c441b9292dc
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
