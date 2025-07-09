import { Skeleton } from "primereact/skeleton";

export const TableSkeleton = () => {
  return (
    <>
      <div className="grid">
        <div className="col-12">
          <div className="p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines">
            <div className="p-datatable-header">
              <div className="p-toolbar p-component">
                <Skeleton width="16rem" height="3rem" />
                <Skeleton width="10rem" height="3rem" />
              </div>
            </div>
            <div className="p-datatable-wrapper loading-inside">
              <table className="p-datatable-table" role="table">
                <thead className="p-datatable-thead">
                  <tr role="row">
                    <th style={{ width: 10 }}>
                      <Skeleton width="2rem" height="2rem"></Skeleton>
                    </th>
                    <th>
                      <Skeleton width="100%" height="2rem"></Skeleton>
                    </th>
                    <th>
                      <Skeleton width="100%" height="2rem"></Skeleton>
                    </th>
                    <th>
                      <Skeleton width="100%" height="2rem"></Skeleton>
                    </th>
                  </tr>
                </thead>
                <tbody className="p-datatable-tbody loading-inside">
                  <tr>
                    <td colSpan={4}>
                      <Skeleton width="100%" height="15rem"></Skeleton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-datatable-footer">
              <div className="p-paginator p-component p-paginator-bottom">
                <Skeleton
                  height="2rem"
                  width="20rem"
                  borderRadius="16px"
                  className="mr-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const FormSkeleton = () => {
  const fieldCount = 3;

  return (
    <div className="grid">
      <div className="col-12 md:col-6 lg:col-6 xl:col-6">
        {[...Array(fieldCount)].map((_, index) => (
          <div key={index} className="col-12 md:col-6">
            <div className="flex flex-column field">
              <Skeleton width="8rem" height="1rem" className="mb-2" />
              <Skeleton width="2.5rem" borderRadius="4px" className="mb-1" />
              <Skeleton width="6rem" height="0.75rem" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CardSkeleton = () => (
  <div className="grid">
    <div className="col-8 lg:col-6 xl:col-4">
      <div className="card p-fluid">
        <h6>
          <Skeleton width="80%" height="2rem" />
        </h6>
        <hr />
        <div>
          <div className="flex flex-column gap-2">
            <Skeleton width="30%" height="1rem" />
            <Skeleton width="100%" height="3rem" />
          </div>
          <br />
          <div className="flex justify-content-end">
            <Skeleton width="40%" height="2.5rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

