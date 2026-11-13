---
uid: api.34e6eefd494ad49e4b8a431eba230ac1e9906e99aa25372385ea5a7c54e1da1b
symbol: "engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Storage.IApplicationStorage})"
source: xml
reviewed: 0780f98cb4159c20e8b3e253ad597d5b83ea70cb4394bd50a018f58f5ed693f7
title: "Constructor"
kind: api
owners: [Inno.Storage.Runtime]
apiSurface: source-clr
---

Creates a reusable factory that obtains an exclusively owned storage sandbox for each session.

**Parameter `storageFactory`:** The composition callback that creates a distinct storage service for the supplied session context.
