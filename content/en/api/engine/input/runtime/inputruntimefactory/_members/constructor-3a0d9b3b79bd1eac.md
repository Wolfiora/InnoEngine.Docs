---
uid: api.3a0d9b3b79bd1eacf9f649a139895e3d04c05ddcadf07448a3f1929aa5d71199
symbol: "engine:Inno.Input.Runtime:M:Inno.Input.Runtime.InputRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Input.IInputBackend})"
source: xml
reviewed: fcb08417eaf88d409dea4ab02522d7b43ce3c9c0c4af3b3cfc5b310930fa1489
title: "Constructor"
kind: api
owners: [Inno.Input.Runtime]
apiSurface: source-clr
---

Creates a reusable factory that obtains an exclusively owned backend for each session.

**Parameter `backendFactory`:** The composition callback that creates a distinct backend for the supplied session context.
