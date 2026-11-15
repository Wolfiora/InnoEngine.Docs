---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a5828d8b3c287545e6e070beae837fb42bda3578955f0f11a8734b4f21ec6d14
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryTransaction.Rollback
title: EditorHistoryTransaction.Rollback
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 6317bab75cfe6caa3d5b0fc4010e2f913d02ef876aa5f44985a45ef002c1e88c

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Reverts every operation recorded by the transaction and does not add a history entry.

## Returns

The result of the atomic rollback attempt.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the transaction is no longer active.
