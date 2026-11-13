---
uid: api.2c26454c24ab14d9dfeea1dda75d42e89bbbd1f2e34735036a3e28139fd45eb0
symbol: "engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntime.#ctor(Inno.Storage.IApplicationStorage,System.Int32,System.Int32)"
source: xml
reviewed: c278701f4f79c3ca7b94c6cf7702f64e8cdfdf08331778bfbe494a5e880f4b2c
title: "Constructor"
kind: api
owners: [Inno.Storage.Runtime]
apiSurface: source-clr
---

Creates a feature whose optional disposable storage ownership transfers to this instance.

**Parameter `storage`:** The application-specific persistent storage sandbox.

**Parameter `maxPendingOperations`:** Positive simultaneous asynchronous operation capacity.

**Parameter `maxWriteBytes`:** Positive maximum value size accepted by one write.
