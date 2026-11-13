---
title: "Conflicting asset importer fixture"
description: "Exercise duplicate semantic importer identity without installing a real plugin."
uid: project.inno-assets-pipeline-duplicateimporterfixture
kind: project
owners:
  - Inno.Assets.Pipeline.DuplicateImporterFixture
---
# Conflicting asset importer fixture

`Inno.Assets.Pipeline.DuplicateImporterFixture` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

DuplicateImporterA and DuplicateImporterB deliberately use the same AssetImporter ID with different extensions, .duplicateid and .duplicateid-b. Different extensions cannot legitimize the duplicate semantic identity. Their field-free asset retains its explicit stable type identity.

Each importer supplies that asset to the borrowed writer and writes the captured source bytes as a runtime artifact. Cancellation and write failures propagate through the real writer. The consuming test must reject the registration conflict before treating either importer as a valid candidate; successfully calling ImportAsync is not evidence that the duplicate registration is legal.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](inno-assets-pipeline-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/assets/fixtures/Inno.Assets.Pipeline.DuplicateImporterFixture/Inno.Assets.Pipeline.DuplicateImporterFixture.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.

## API reference

[Types and exact member contracts](inno-assets-pipeline-duplicateimporterfixture.md). These declarations describe this support library, not a product or script API surface.
