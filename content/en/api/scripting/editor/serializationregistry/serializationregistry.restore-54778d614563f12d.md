---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.54778d614563f12d1d866994a052f679eb482aa9c2ff0b6451e142f272e3bf13
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Restore``1(``0,System.ReadOnlySpan{System.Byte},InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.Restore
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 17d3a08ddb1d789a06e50845ccc9ce0aee922027410467665d940ee57d667324
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The declared target contract.

## Parameters

**Parameter `target`:** The existing target object.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `target` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
