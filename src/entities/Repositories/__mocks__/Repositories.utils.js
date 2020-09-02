const record = Symbol('Record.of(Repositories)');
const dto = Symbol('DTO.of(Repositories)');
const listQueryDto = Symbol('ListQueryDTO.of(Repositories)');

export function dtoToRecord() {
  return record;
}

export function recordToDto() {
  return dto;
}

export function listQueryToListQueryDto() {
  return listQueryDto;
}

export function getRepositoriesKey(banner) {
  return banner.key;
}
