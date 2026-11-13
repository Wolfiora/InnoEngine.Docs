---
uid: api.df9d24d7f66901d5c5ec60a596eda81ee502e5dc42336a95391c4bb37c43876f
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.Refresh"
source: xml
reviewed: 41f3b36f6f6f0d02bdb556970fad6a5c5fde95df113570a6780df7e040eef938
title: "Refresh"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Reconciles a complete source snapshot while preserving unchanged entry identities.

**Exception `T:System.ObjectDisposedException`:** The source filesystem has been disposed.

**Exception `T:System.IO.IOException`:** Source enumeration fails; the previous complete index and its identities remain active.

**Exception `T:System.UnauthorizedAccessException`:** A source directory cannot be read; the previous complete index remains active.

**Exception `T:System.IO.InvalidDataException`:** Multiple source paths claim the same persistent entry identity.

**Exception `T:System.InvalidOperationException`:** A new entry identity cannot be registered; the previous index remains active.
