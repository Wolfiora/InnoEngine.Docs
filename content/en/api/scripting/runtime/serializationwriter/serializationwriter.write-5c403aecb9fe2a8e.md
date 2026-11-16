---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5c403aecb9fe2a8ee83e0d92a841009abdcdf9606e7d70cc6c8dcf63f0e623ae
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.Write(System.String,System.Object,System.Type)
title: SerializationWriter.Write
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: f95d8d8e0574486134c2cdc5d72c6df3d965b966acda4e40f7055e8afb28eb3a
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to encode, including null when permitted by the declared type.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The declared type is null.

**Exception `T:System.ArgumentException`:** The member name is empty.

**Exception `T:System.InvalidOperationException`:** The operation has ended, the name is duplicated, or the value is unsupported.
