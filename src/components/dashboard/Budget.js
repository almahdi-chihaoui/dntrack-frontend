import {
  useEffect,
  useState,
} from 'react';

import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';

const Budget = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(5);
  });

  return (
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              BUDGET
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {value}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Budget;
