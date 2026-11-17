---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3fd03de904b2ecc28c7d9dffbeb1e2763992c06a7e2a77fd8962bc61a3053fa7
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.Write(System.String,System.Object,System.Type)
title: SerializationWriter.Write
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 5621e6684d967f91b20d0ac3590a30d9b23acad0eeff9514901ac7cbfbea4076
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
