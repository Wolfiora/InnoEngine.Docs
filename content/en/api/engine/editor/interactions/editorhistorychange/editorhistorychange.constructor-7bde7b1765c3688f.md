---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7bde7b1765c3688fce1d78a2831b7b21858c233d2da9db90defc2bcbcc5e17fa
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryChange.#ctor(System.String,Inno.Editor.Interactions.EditorHistoryPayload,System.String)
title: EditorHistoryChange.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: d78aca3b5e6183ec321a4d7925b57dc3c7452f34924a5f0d84bec46c273ff4e2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `kind`:** The stable globally unique handler protocol identifier.

**Parameter `payload`:** The immutable neutral payload interpreted by the handler.

**Parameter `mergeKey`:** An optional stable key used by the handler to merge adjacent changes.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `kind` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `payload` is `null`.
