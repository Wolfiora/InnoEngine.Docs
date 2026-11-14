---
uid: api.df9d24d7f66901d5c5ec60a596eda81ee502e5dc42336a95391c4bb37c43876f
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.Refresh"
source: xml
reviewed: fb78a15733db6f170e9fb2a38aeb55e5bb6ba8c72b06c3aedfaa3d62954d5274
title: "AssetFileSystem.Refresh"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Reconciles a complete source snapshot while preserving unchanged entry identities.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The source filesystem has been disposed.

**Exception `T:System.IO.IOException`:** Source enumeration fails; the previous complete index and its identities remain active.

**Exception `T:System.UnauthorizedAccessException`:** A source directory cannot be read; the previous complete index remains active.

**Exception `T:System.IO.InvalidDataException`:** Multiple source paths claim the same persistent entry identity.

**Exception `T:System.InvalidOperationException`:** A new entry identity cannot be registered; the previous index remains active.
