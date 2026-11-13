---
uid: api.39c9d80710f926ae9f6c7b9562d7b8627da334fde7c5bf8b24b4a1309a317da5
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadException.#ctor(System.Collections.Generic.IReadOnlyList{System.String},System.TimeSpan,System.Int32)"
source: xml
reviewed: c4c50a6994e2b225ebfb7da8b5a431f5c12393a2ef1d65802126882c81bcd809
title: "AssemblyUnloadException.Constructor"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Creates a terminal unload failure with stable generation diagnostics.

**Parameter `retainedGenerations`:** Descriptions of every retired generation that remains reachable.

**Parameter `elapsed`:** The elapsed barrier duration.

**Parameter `collectionAttempts`:** The number of full collection cycles already performed.

**Exception `T:System.ArgumentNullException`:** Thrown when `retainedGenerations` is null.

**Exception `T:System.ArgumentException`:** Thrown when no retained generation is supplied.
