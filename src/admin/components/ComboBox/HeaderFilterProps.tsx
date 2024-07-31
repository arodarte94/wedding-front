import { Chip } from '@mui/material';

export const headerFilterProps = {
  sx: {
    '& .MuiOutlinedInput-root': {
      height: '35px!important',
      flexWrap: 'nowrap',
    },
  },
  renderTags: (value, getTagProps) => {
    const numTags = value.length;
    const limitTags = 1;

    return (
      <>
        {value.slice(0, limitTags).map((option, index) => (
          <Chip
            size="small"
            {...getTagProps({ index })}
            key={index}
            label={option.name}
          />
        ))}

        {numTags > limitTags && ` +${numTags - limitTags}`}
      </>
    );
  },
};
