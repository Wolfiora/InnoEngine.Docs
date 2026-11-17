---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.df9d24d7f66901d5c5ec60a596eda81ee502e5dc42336a95391c4bb37c43876f
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.Refresh
title: AssetFileSystem.Refresh
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: aff17f0f6c588c688a3b737c3d7c159c21af905fecd9a90e58cdeb1f14fa1d72
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The source filesystem has been disposed.

**Exception `T:System.IO.IOException`:** Source enumeration fails; the previous complete index and its identities remain active.

**Exception `T:System.UnauthorizedAccessException`:** A source directory cannot be read; the previous complete index remains active.

**Exception `T:System.IO.InvalidDataException`:** Multiple source paths claim the same persistent entry identity.

**Exception `T:System.InvalidOperationException`:** A new entry identity cannot be registered; the previous index remains active.
